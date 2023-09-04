import mongoose from "mongoose";





const exampaperSchema  = new mongoose.Schema({
    fileurl:{type:String,required:[true,"Fileurl  is required "]},
    filename:{type:String,required:[true,"subject  is required "]},
    course:{type:String,required:[true,"Course Name is required "]},
    semester:{type:String,required:[true,"semester Name is required "]},
    college:{type:String,required:[true,"college  is required "]},
    papertype:{type:String,required:[true,"papertype  is required "]},
    level:{type:String,required:[true,"level  is required "]},
    batch:{type:String,required:[true,"batch  is required "]},
    subject:{type:String,required:[true,"subject  is required "]},
    
    user:{type:String,ref:"users",required:true},
    
    },{timestamps : true});


const ExamPapers = mongoose.models.exampapers || mongoose.model("exampapers",exampaperSchema)

export default ExamPapers;