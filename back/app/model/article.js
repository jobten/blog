

module.exports = app=>{
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
  
  
    // 链表查询
    const UserSchema = new Schema({
      __v:{type:Number, select:false},
      title: {type:String, required:true},// 标题
      article:{type:String, required:true},
      article_html:{type:String, required:true},
      views:{type:String, required:false, default:1},
      // 作者
      author:{
        type:Schema.Types.ObjectId, ref:'User',required:true
      },
      views: { type: Number, required:false, default: 1},
      like: { type: Number, required:false, default: 0},
      dislike: { type: Number, required:false, default: 0},
  
    }, { timestamps:true } )
  
    return mongoose.model('Article', UserSchema )
  }