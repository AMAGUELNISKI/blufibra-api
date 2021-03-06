import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcrypt';
import Colaborador from "./Colaborador";
import TipoUsuario from "./TipoUsuario";

class Usuario extends Model {
   static init(sequelize){
      super.init(
         {
            username: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
         },
         {
            sequelize,
            underscored: true,
            modelName: 'usuario'
         }
      );      
      
      this.addHook('beforeSave', async user => {
         if (user.password){
            user.password_hash = await bcrypt.hash(user.password, 8);
         }
      });

      return this;
   }   

   checkPassword(password){
      return bcrypt.compare(password, this.password_hash);
   }
}

export default Usuario;