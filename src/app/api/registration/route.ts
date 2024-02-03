import {NextRequest, NextResponse} from "next/server";

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/UsersCollection');
const RegistrationSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    email: {
        type: String,
        unique: true,
    },
    superuser: Boolean
});

const Registration = mongoose.models.user || mongoose.model('user', RegistrationSchema);
export async function POST(request: NextRequest, response: NextResponse) {
        const data = await request.json()
        try {
            const user = new Registration(data);
            let result = user.save();
            result = result.toObject();
        } catch {
            return new Response;
        }
}