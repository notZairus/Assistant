import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import axios from "axios";
import Loader from "@/components/loader";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";
import { useLocation } from "wouter";


interface FormData {
    id: string,
    title: string;
    subject: string;
    deadline: string;
    note?: string
}

const initialValue: FormData = {
    id: nanoid(),
    title: '',
    subject: '',
    deadline: '',
    note: ''
};


export default function AssignmentForm() {
    const [, setLocation] = useLocation();
    const [formData, setFormData] = useState<FormData>(initialValue);
    const [loading, setLoading] = useState<boolean>(false);

    function handleSubmit(e: any) {
        e.preventDefault();

        setLoading(true);
        axios.post("https://zairus.app.n8n.cloud/webhook/4510742b-f12f-49d8-88c9-094201142c5b", formData)
        .then((res) => {
            setLoading(false);
            console.log(res);
            setFormData(initialValue);
        });

    }


    return (
        <>
            <Loader isLoading={loading} />

            <div className="w-full overflow-hidden h-dvh bg-blue-400 flex items-center justify-center">
                <motion.form 
                    transition={{
                        duration: 1.5,
                        type: 'spring'
                    }}
                    initial={{
                        y: '100dvh'
                    }}
                    animate={{
                        y: 0
                    }}
                    onSubmit={handleSubmit}
                    className="w-11/12 md:w-md p-5 bg-white shadow-[8px_8px_0px_black] border-4 border-black rounded"
                >
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Add an Assignment</h2>
                        <motion.button 
                            className="text-white aspect-square h-8 font-bold text-xl bg-red-400 border-4 border-black shadow-[4px_4px_0px_black] active:shadow-none transition active:translate-1"
                            onClick={() => setLocation('/')}
                        >
                                x
                        </motion.button>
                    </div>

                    <div className="mt-4 space-y-2">
                        <Label>Title</Label>
                        <Input 
                            required
                            value={formData.title}
                            onChange={(e) => {
                                setFormData(prev => ({
                                    ...prev,
                                    title: e.target.value
                                }))
                            }}
                            className="border-2 outline-none border-black rounded shadow-[2px_2px_0px_black]"
                        />
                    </div>

                    <div className="mt-4 space-y-2">
                        <Label>Subject</Label>
                        <select 
                            required
                            className="border-2 px-2 py-1 w-full h-9 outline-none border-black rounded shadow-[2px_2px_0px_black]"
                            value={formData.subject}
                            onChange={(e) => {
                                setFormData(prev => ({
                                    ...prev,
                                    subject: e.target.value
                                }))
                            }}
                        >
                            <option value="">--Select a Subject--</option>
                            <option value="SF101">SF101</option>
                            <option value="opt2">Opt2</option>
                        </select>
                    </div>

                    <div className="mt-4 space-y-2">
                        <Label>Deadline</Label>
                        <Input 
                            required
                            type="date"
                            className="border-2 outline-none border-black rounded shadow-[2px_2px_0px_black]"
                            value={formData.deadline}
                            onChange={(e) => {
                                setFormData(prev => ({
                                    ...prev,
                                    deadline: e.target.value
                                }))
                            }}
                        />
                    </div>

                    <div className="mt-4 space-y-2">
                        <Label>Additional note</Label>
                        <Textarea 
                            className="border-2 outline-none h-12 border-black rounded shadow-[2px_2px_0px_black]"
                            value={formData.note}
                            onChange={(e) => {
                                setFormData(prev => ({
                                    ...prev,
                                    note: e.target.value
                                }))
                            }}
                        />
                    </div>

                    <motion.button 
                        className="mt-5 w-full text-white font-bold text-xl py-3 bg-red-400 border-4 border-black shadow-[4px_4px_0px_black] 
                            active:shadow-none transition active:translate-1"
                        >
                        Submit
                    </motion.button>
                </motion.form>
            </div>
        </>
    );
}
