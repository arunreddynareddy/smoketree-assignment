import User from "../model/userModel.js";
import Address from "../model/addressModel.js";

const createUser = async (req, res) => {
    try {
        const {name, address} = req.body;
        const userExist = await User.findOne({name});
        const addressExist = await Address.findOne({address});
        if (!userExist) {
            let userTable = await User.create({name});
            if (!addressExist) {
                let addressTable = await Address.create({address, user: userTable._id});
                userTable.addresses.push(addressTable._id);
                await userTable.save();
                res.status(200).json({message: "new User and Address created successfully"})
            }else {
                res.status(400).json({message: "Address is refers to other user, Please try another"})
            }  
        }
        else {
            if (!addressExist) {
                let addressTable = await Address.create({address, user: userExist._id});
                userExist.addresses.push(addressTable._id);
                await userExist.save();
                res.status(200).json({message: "Address is added to existed user successfully"});
            }else {
                res.status(400).json({message: "Address is refers to other user, Please try another"})
            }
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export default createUser