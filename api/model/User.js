import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
{
   username:{ //tên người dùng
        type: String,
        required:true,
        unique:true
    },
    email:{ //chủ đề của chuyến du lịch đó
        type: String,
        required:true
    },
    password:{//mô tả
        type: String,
        required:true
    },
    is_admin:{// t lười :)) 
        type:Boolean,
        default:false,
    },
},
{timestamps:true} // sử dụng để cập nhật thời gian
);

export default mongoose.model("User",userSchema)