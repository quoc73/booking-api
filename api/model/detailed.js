import mongoose from 'mongoose';
const { Schema } = mongoose;

const detailedSchema = new mongoose.Schema(
{
   title:{ //tieu de
        type: String,
        required:true
    },
    description:{ //chủ đề của chuyến du lịch đó
        type: String,
        required:true
    },
    price:{ //gia1 của chuyến du lịch đó
        type: Number,
        required:true
    },
    date_occur:{//so ngay dien ra
        type:Date,
        required:true
    },
    rating:{
        type: Number,
        min:0,
        max:5
    },
    photo:{
        type: [String],
    },
    cancellation:{// khả năng hủy vé
        type: String,
        required:true
    },
    duration:{//thời lượng chương trình du lịch
        type: String,
        required:true
    },
    },
);

export default mongoose.model("detailed",detailedSchema)