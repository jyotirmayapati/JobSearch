const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body, postedBy: req.user.id });
    await job.save();
    res.json(job);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("company");
    res.json(jobs);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
