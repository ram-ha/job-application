import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ApplyForm {
    position: string;
    reason: string;
    salary: number;
    introduce: string;
    dream: string;
    email: string;
    errors: string;
    data: object;
}
export default function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ApplyForm>({ mode: 'onChange' });
    const [submitData, setSubmitData] = useState<ApplyForm>();
    const onSubmit = (data: ApplyForm) => {
        setSubmitData(data);
    };
    return (
        <div className="bg-slate-100 h-auto w-full flex items-center justify-center">
            <main className="w-[440px] my-16 font-semibold bg-blue-100 border-2 border-black border-r-4 border-b-4 rounded-xl p-9">
                <header className="text-center text-xl pb-6">🏷️ Job Application Form 🏷️</header>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <section className="flex flex-col items-start justify-start">
                        <h1 className="text-sm mb-2">
                            What department do you want to work for?
                            <span className="text-red-500 text-xs ml-1">{errors?.position?.message}</span>
                        </h1>
                        <label htmlFor="sales" className="flex items-center text-xs h-5">
                            <input
                                {...register('position', {
                                    required: '*required',
                                })}
                                type="radio"
                                value="sales"
                                id="sales"
                                className="mr-1"
                            />
                            Sales
                        </label>
                        <label htmlFor="marketing" className="flex items-center text-xs h-5">
                            <input
                                {...register('position', {
                                    required: '*required',
                                })}
                                type="radio"
                                value="marketing"
                                id="marketing"
                                className="mr-1"
                            />
                            Marketing
                        </label>
                        <label htmlFor="accounting" className="flex items-center text-xs h-5">
                            <input
                                {...register('position', {
                                    required: '*required',
                                })}
                                type="radio"
                                value="accounting"
                                id="accounting"
                                className="mr-1"
                            />
                            Accounting
                        </label>
                        <label htmlFor="cs" className="flex items-center text-xs h-5">
                            <input
                                {...register('position', {
                                    required: '*required',
                                })}
                                type="radio"
                                value="cs"
                                id="cs"
                                className="mr-1"
                            />
                            Customer Service
                        </label>
                    </section>
                    <section className="flex flex-col items-start justify-start">
                        <h1 className="text-sm mb-2">
                            Why do you want to join this company?
                            <span className="text-red-500 text-xs ml-1">{errors?.reason?.message}</span>
                        </h1>
                        <label htmlFor="money" className="flex items-center text-xs h-5">
                            <input
                                {...register('reason', {
                                    required: '*required',
                                })}
                                type="radio"
                                value="money"
                                id="money"
                                className="mr-1"
                            />
                            I want money!
                        </label>
                        <label htmlFor="love" className="flex items-center text-xs h-5">
                            <input
                                {...register('reason', {
                                    required: '*required',
                                })}
                                type="radio"
                                value="love"
                                id="love"
                                className="mr-1"
                            />
                            I love this company
                        </label>
                        <label htmlFor="learn" className="flex items-center text-xs h-5">
                            <input
                                {...register('reason', {
                                    required: '*required',
                                })}
                                type="radio"
                                value="learn"
                                id="learn"
                                className="mr-1"
                            />
                            learn I want to learn
                        </label>
                        <label htmlFor="unknown" className="flex items-center text-xs h-5">
                            <input
                                {...register('reason', {
                                    required: '*required',
                                })}
                                type="radio"
                                value="unknown"
                                id="unknown"
                                className="mr-1"
                            />
                            I don't know why
                        </label>
                    </section>
                    <section>
                        <h1 className="text-sm mb-2">Salary</h1>
                        <select
                            name="salary"
                            id="salary"
                            className="w-full border-2 border-blue-500 px-2 py-1 rounded-md"
                        >
                            <option value="50">$ 50K</option>
                            <option value="100">$ 100K</option>
                            <option value="150">$ 150K</option>
                            <option value="200">$ 200K</option>
                        </select>
                    </section>
                    <section className="flex flex-col items-start">
                        <h1 className="text-sm mb-2">Introduce yourself</h1>
                        <input
                            {...register('introduce', {
                                required: 'Please write down your introduction',
                            })}
                            type="text"
                            className="w-full border-2 border-blue-500 px-2 py-1 rounded-md"
                        />
                        <span className="text-xs pt-1 text-red-500">{errors.introduce?.message}</span>
                    </section>
                    <section className="flex flex-col items-start">
                        <h1 className="text-sm mb-2">Tell us what your dreams are</h1>
                        <textarea
                            {...register('dream', {
                                required: 'Please tell us what your dreams are',
                                minLength: {
                                    message: 'Please write more than 10 chars',
                                    value: 10,
                                },
                            })}
                            className="w-full border-2 border-blue-500 px-2 py-1 rounded-md"
                        />
                        <span className="text-xs pt-1 text-red-500">{errors.dream?.message}</span>
                    </section>
                    <section className="flex flex-col items-start">
                        <h1 className="text-sm mb-2">Email</h1>
                        <input
                            {...register('email', {
                                required: 'Please write down your email.',
                                validate: {
                                    naver: (text) => text.includes('@naver.com'),
                                },
                            })}
                            type="email"
                            className="w-full border-2 border-blue-500 px-2 py-1 rounded-md"
                        />
                        <span className="text-xs pt-1 text-red-500">
                            {errors?.email?.type === 'naver' ? 'Only @naver is allowed' : errors?.email?.message}
                        </span>
                    </section>
                    <button className="w-full py-2 bg-sky-300 text-slate-800 rounded-md border-2 border-black border-r-4 border-b-4 hover:bg-sky-100">
                        Give me this job
                    </button>
                </form>
                {submitData && <span className="w-full break-all mt-1">{JSON.stringify(submitData)}</span>}
            </main>
        </div>
    );
}
