import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { type FormEvent } from "react";
import { useState } from "react";


interface FormData {
    title: string;
    subject: string;
    deadline: string;
    note?: string
}


export default function AssignmentForm() {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        subject: '',
        deadline: '',
        note: ''
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log('hello')
    }


    return (
        <>
            <div className="w-full min-h-dvh bg-blue-300 flex items-center justify-center">
                <form 
                    onSubmit={handleSubmit}
                    className="w-11/12 md:w-md p-5 bg-white shadow-[8px_8px_0px_black] border-4 border-black rounded"
                >
                    <h2 className="text-2xl font-bold">Add an Assignment</h2>

                    <div className="mt-4 space-y-2">
                        <Label>Title</Label>
                        <Input 
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
                            className="border-2 px-2 py-1 w-full h-9 outline-none border-black rounded shadow-[2px_2px_0px_black]"
                            value={formData.subject}
                            onChange={(e) => {
                                setFormData(prev => ({
                                    ...prev,
                                    subject: e.target.value
                                }))
                            }}
                        >
                            <option value="opt1">Opt1</option>
                            <option value="opt2">Opt2</option>
                        </select>
                    </div>

                    <div className="mt-4 space-y-2">
                        <Label>Deadline</Label>
                        <Input 
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

                    <Button className="mt-5 w-full text-white font-bold text-xl py-5 bg-red-400 border-4 border-black shadow-[4px_4px_0px_black]">
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
}
