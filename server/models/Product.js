const {getDataBase} = require('../config/mongodb');
const {ObjectId} = require('mongodb');

class ProductModel {
    static async findAll() {
        try {
            const db = await getDataBase();
            const products = await db.collection('products').find().toArray();
            return products;
        } catch (error) {
            throw new Error(error);
        }
    }
    
    static async findById(id) {
        try {
            const db = await getDataBase();
            const product = await db.collection('products').findOne({_id: ObjectId(id)});
            return product;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async createProduct(product) {
        try {
            const db = await getDataBase();
            await db.collection('products').insertOne(product);
        } catch (error) {
            throw new error(error);
        }
    }

    static async deleteProduct(id) {
        try {
            const db = await getDataBase();
            await db.collection('products').deleteOne({_id: ObjectId(id)});
        } catch (error) {
            throw new error(error);
        }
    }

    static async updateUser(id,product) {
        try {
          const db = getDataBase();
          await db.collection("products").updateOne({_id:ObjectId(id)},{
              $set:product
            });      
        } catch (err) {
          throw err;
        }
      }
    
}

module.exports = ProductModel;