import mongoose from 'mongoose';
const { Schema } = mongoose;

const attractionSchema = new mongoose.Schema({
    location_name:{ //tên địa điểm
        type: String,
        required:true
    },
    name:{ //chủ đề của chuyến du lịch đó
        type: String,
        required:true
    },
    description:{//mô tả
        type: String,
        required:true
    },
    duration:{//thời lượng chương trình du lịch
        type: String,
        required:true
    },
    cancellation:{// khả năng hủy vé
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    photo:{
        type: [String],
    },
    rating:{
        type: Number,
        min:0,
        max:5
    },
    cheapestPrice:{
        type: Number,
        required:true
    },
    feature:{
        type:Boolean,
        default:false,
    },
});

export default mongoose.model("attraction",attractionSchema)