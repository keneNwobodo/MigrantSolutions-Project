const joi =  require("@hapi/joi");

const signupChecks = (data) => {
    const validationScehma = joi.object({
        username: joi.string().min(5).required(),
        fullname: joi.string().min(5).required(),
        password: joi.string().min(5).required(),
        email: joi.string().min(5).required().email(),
        address: joi.string().min(4).required()
    })
    return validationScehma.validate(data)
}

module.exports.signupChecks = signupChecks