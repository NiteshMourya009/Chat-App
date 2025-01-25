import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;
       // console.log("Logged in user is :", req.user)
		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
      //  console.log("Logged in user: ", req.user);


		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};