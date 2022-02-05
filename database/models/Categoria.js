module.exports = (sequelize, DataTypes) => {
  let alias="Categoria"
    let cols = {
        id: {

            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        }
       
    };

    let config = {
        tableName: "categorias",
        createdAt: false,
        updatedAt:false,
        deletedAt:false
       
    };

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function (models) {

        Categoria.hasMany(models.Producto, {
            as: 'Producto',
            foreignKey:'categoria_id'
            
        })
    
       
           

    }

    return Categoria;

}