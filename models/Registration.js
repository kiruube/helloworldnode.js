const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    childName:{
        type: String,
        trim: true
    },

    gender:{
        type: String,
        trim: true

    },

    dateOfBirth:{
        type: Date,
        trim: true
    },

    fatherName:{
        type: String,
        trim: true
    },
    fatherPhone:{
        type: String,
        trim: true
    },
    fatherEmail:{
        type: String,
        trim: true
    },
    fatherNationality:{
        type: String,
        trim: true

    },  fatherOccupation:{
        type: String,
        trim: true
    },
    motherEmail:{
        type: String,
        trim: true
    },
    motherName:{
        type: String,
        trim: true
    },
    motherPhone:{
        type: String,
        trim: true
    },
    motherEmail:{
        type: String,
        trim: true
    },
    motherNationality:{
        type: String,
        trim: true

    }, 
     motherOccupation:{
        type: String,
        trim: true
    },
    motherEmail:{
        type: String,
        trim: true
    },
    motherOccupation:{
        type: String,
        trim: true
    },
    nationality:{
        type: String,
        trim: true
    },
    religion:{
        type: String,
        trim: true
    },
    medicalBackground:{
        type: String,
        trim: true
    },
    isOrphan:{
        type: String,
        trim: true
    },
    guardianName:{
        type: String,
        trim: true
    },
    guardianPhone:{
        type: String,
        trim: true
    },
    guardianEmail:{
        type: String,
        trim: true

    }
});

module.exports = mongoose.model("Registration", registrationSchema);