const mongoose= require("mongoose");

const quizSchema=new mongoose.Schema({
    quizId:{
        type:String,
        required:true
    },
    quizName:{
        type:String,
        required:true
    },
    quizDesc:{
        type:String,
        required:true
    },
    quizGrade:{
        type:{},
        required:true
    },
    quizDuration:{
        type:Number,
        required:true
    },
    quizQnDatas:{
        type:Array,
        required:true
    },
    date:{
        type:Date,
        default:new Date().toLocaleDateString()
    },
    updateDate:{
        type:Date,
        default:new Date().toLocaleDateString()
    }
})
const Quiz=mongoose.model("Quiz",quizSchema);

module.exports=Quiz;