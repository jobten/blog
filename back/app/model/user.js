module.exports = app => {
    console.log('User model')
    const mongoose = app.mongoose
    const Schema = mongoose.Schema

    const UserSchema = new Schema({
        __v:{type:Number, select:false},
        email: { type: String, require: true },
        password: { type: String, require: true, select:false },
        nickname: { type: String, require: true },
        avatar:{type:String, required:false, default:'/user.png'}

        // 关注的人，
        // 点赞文章
        // 点赞的答案

    }, { timestamps: true })

    return mongoose.model('User', UserSchema)
}