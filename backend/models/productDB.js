import mongoose from 'mongoose';

const {Schema} = mongoose;

const reviewSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type : String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,        
    },
    comment:{
        type:String,
        required:true,
    },
},
    {timestamps:true}
);


const productSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },    
    
    name:{
        type:String,
        required:true,        
    },
    image:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true
    },
    numReviews:{
        type:Number,
        required: true,
    },
    price:{
        type:Number,
        required:true,
        default:0,
    },
    countInStock:{
        type:Number,
        required:true,
        default:0
    }
},
/**Mongoose will add two properties of type Date
 * createdAt: a date representing when this document was created
 * updatedAt: a date representing when this document was last updated .  */ 
{timestamps:true}     
);

const Product = mongoose.model('Product', productSchema);

export default Product;