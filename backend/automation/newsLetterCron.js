import cron from "node-cron";
import {Job} from "../models/jobSchema.js";
import {User} from "../models/userSchema.js";
import { sendEmail } from "../utils/sendEmail.js";

export const newsLetterCron=()=>{
    cron.schedule("*/1 * * * *",async()=>{
        console.log("Running Cron Automation")
        const jobs=await Job.find({newsLetterSent: false});
        for(const job of jobs){
            try{
                const filteredUsers=await User.find({
                    $or:[
                        {"niches.firstNiche":job.jobNiche},
                        {"niches.secondNiche":job.jobNiche},
                        {"niches.thirdNiche":job.jobNiche},
                    ]
                })
                for(const user of filteredUsers){
                    const subject=`Fresh Listing: ${job.title} in ${job.jobNiche} Available Today`;
                    const message=`Hi ${user.name},\n\nExciting opportunity alert! A new job matching your profile has just been listed. The role is for a ${job.title} at ${job.companyName}, and they're actively hiring.\n\nJob Highlights:\n- **Position:** ${job.title} at ${job.companyName}\n- **Location:** ${job.location}\n- **Salary:** ${job.salary}\n\nDon't miss out—positions like this are often filled quickly!\n\nWe're here to support you throughout your job search. Best of luck!\n\nWarm Regards,\nRojgar Setu`;
                    sendEmail({
                        email:user.email,
                        subject,
                        message
                    });
                }
                job.newsLetterSent=true;
                await job.save();
            }catch(error){
                console.log("ERROR IN NODE CRON CATCH BLOCK");
                return next(console.error(error || "Some error in Cron."));
            }
        }
    })
}