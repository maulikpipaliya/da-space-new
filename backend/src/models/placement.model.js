import mongoose from "mongoose"

const placementSchema = new mongoose.Schema({
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    // password: {
    //     type: String,
    //     required: true,
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    // firstName: {
    //     type: String,
    //     required: true,
    // },
    // lastName: {
    //     type: String,
    // },
    // contact: {
    //     type: String,
    // },
    // address: {
    //     city: {
    //         type: String,
    //     },
    //     state: {
    //         type: String,
    //     },
    //     country: {
    //         type: String,
    //     },
    //     pincode: {
    //         type: String,
    //     },
    // },
    // profilePic: {
    //     type: String,
    // },
    // yearOfJoining: {
    //     type: String,
    // },
    // role: {
    //     type: String,
    //     default: "user",
    //     enum: ["user", "admin"],
    // },
    // isActive: {
    //     type: Boolean,
    //     default: true,
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now,
    // },
    // lastLogin: {
    //     type: Date,
    // },
    companyName: {
        type: String,
    },
    jobProfile: {
        type: String,
    },
    yearOfDrive: {
        type: String,
    },
    roundNameX: {
        type: String,
    },
    roundNameY: {
        type: String,
    },
    roundNameXDescriptioconst: {
        type: String,
    },
})

//Don’t use arrow functions when you use Mongoose (Schema.methods)
// placementSchema.methods.matchPassword = async function (givenPassword) {
//     return await bcrypt.compare(givenPassword, this.password)
// }

// placementSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//         next()
//     }
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
// })

const placementModel = mongoose.model("Placement", placementSchema)
export default placementModel
