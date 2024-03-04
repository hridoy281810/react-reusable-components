

import { FieldValues,  SubmitHandler, useForm } from "react-hook-form";
import { Form, FormSection, FormSubmit, Input} from "./components/ReusableForm";
import Container from "./components/ui/Container";
import { z } from "zod";

const App = () => {


  const {handleSubmit,register,formState: {errors}} = useForm<TTestSchema>()
  const onSubmit = (data: FieldValues)=>{
    console.log(data);

  }
  const TestSchema  = z.object({
    name: z.string().min(1,{message:"the name is required"}),
    email: z.string().email().min(1,{message:"the email is required"}),
    password: z.string().min(6,{message:"To short"}),

  })
  type TTestSchema = z.infer<typeof TestSchema>
return (
    <div>
<Container>
<Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues >}  double={true}>
  <FormSection >
<Input label='name'type='text' register={register("name")} errors={errors}/>
<Input label='email'type='email' register={register("email")} errors={errors}/>
<Input label='password'type='password' register={register("password")} errors={errors}/>
<Input label='email'type='checkbox' register={register("email")} errors={errors}/>
<Input label='email'type='radio' register={register("email")} errors={errors}/>
  </FormSection>
    <FormSubmit />
</Form>
</Container>
    </div>
  );
};

export default App;