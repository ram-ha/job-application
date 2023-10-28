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
        <main>
            <header>🏷️ Job Application Form 🏷️</header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <h1>What department do you want to work for?</h1>
                    <span>{errors?.position?.message}</span>
                    <label htmlFor="sales">
                        <input
                            {...register('position', {
                                required: '*required',
                            })}
                            type="radio"
                            value="sales"
                            id="sales"
                        />
                        Sales
                    </label>
                    <label htmlFor="marketing">
                        <input
                            {...register('position', {
                                required: '*required',
                            })}
                            type="radio"
                            value="marketing"
                            id="marketing"
                        />
                        Marketing
                    </label>
                    <label htmlFor="accounting">
                        <input
                            {...register('position', {
                                required: '*required',
                            })}
                            type="radio"
                            value="accounting"
                            id="accounting"
                        />
                        Accounting
                    </label>
                    <label htmlFor="cs">
                        <input
                            {...register('position', {
                                required: '*required',
                            })}
                            type="radio"
                            value="cs"
                            id="cs"
                        />
                        Customer Service
                    </label>
                </section>
                <section>
                    <h1>Why do you want to join this company?</h1>
                    <span>{errors?.reason?.message}</span>
                    <label htmlFor="money">
                        <input
                            {...register('reason', {
                                required: '*required',
                            })}
                            type="radio"
                            value="money"
                            id="money"
                        />
                        I want money!
                    </label>
                    <label htmlFor="love">
                        <input
                            {...register('reason', {
                                required: '*required',
                            })}
                            type="radio"
                            value="love"
                            id="love"
                        />
                        I love this company
                    </label>
                    <label htmlFor="learn">
                        <input
                            {...register('reason', {
                                required: '*required',
                            })}
                            type="radio"
                            value="learn"
                            id="learn"
                        />
                        learn I want to learn
                    </label>
                    <label htmlFor="unknown">
                        <input
                            {...register('reason', {
                                required: '*required',
                            })}
                            type="radio"
                            value="unknown"
                            id="unknown"
                        />
                        I don't know why
                    </label>
                </section>
                <section>
                    <h1>Salary</h1>
                    <select name="salary" id="salary">
                        <option value="50">$ 50K</option>
                        <option value="100">$ 100K</option>
                        <option value="150">$ 150K</option>
                        <option value="200">$ 200K</option>
                    </select>
                </section>
                <section>
                    <h1>Introduce yourself</h1>
                    <input
                        {...register('introduce', {
                            required: 'Please write down your introduction',
                        })}
                        type="text"
                    />
                    <span>{errors.introduce?.message}</span>
                </section>
                <section>
                    <h1>Tell us what your dreams are</h1>
                    <textarea
                        {...register('dream', {
                            required: 'Please tell us what your dreams are',
                            minLength: {
                                message: 'Please write more than 10 chars',
                                value: 10,
                            },
                        })}
                    />
                    <span>{errors.dream?.message}</span>
                </section>
                <section>
                    <h1>Email</h1>
                    <input
                        {...register('email', {
                            required: 'Please write down your email.',
                            validate: {
                                naver: (text) => text.includes('@naver.com'),
                            },
                        })}
                        type="email"
                    />
                    <span>
                        {errors?.email?.message}
                        {errors?.email?.type === 'naver' ? 'Only @naver is allowed' : null}
                    </span>
                </section>
                <button>Give me this job</button>
            </form>
            {submitData && <span>{JSON.stringify(submitData)}</span>}
        </main>
    );
}
