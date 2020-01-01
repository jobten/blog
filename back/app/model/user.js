module.exports = app => {
    console.log('User model')
    const mongoose = app.mongoose
    const Schema = mongoose.Schema

    const UserSchema = new Schema({
        __v:{type:Number, select:false},
        email: { type: String, require: true },
        password: { type: String, require: true, select:false },
        nickname: { type: String, require: true },
        avatar:{type:String, required:false, default:'/user.png'},
        following: {
            type: [{ type: Schema.Types.ObjectId, ref: 'User' }]
        },
        likeArticle:{
            type: [{ type: Schema.Types.ObjectId, ref: 'Article' }]
        },
        dislikeArticle:{
            type: [{ type: Schema.Types.ObjectId, ref: 'Article' }]
        }

    }, { timestamps: true })

    return mongoose.model('User', UserSchema)
}