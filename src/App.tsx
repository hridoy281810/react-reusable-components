

import { FieldValues, useForm } from "react-hook-form";
import { Form, FormSection, FormSubmit } from "./components/ReusableForm";
import Container from "./components/ui/Container";

const App = () => {


  const {handleSubmit,register} = useForm()
  const onSubmit = (data: FieldValues)=>{
    console.log(data);
    
  }
  const double = true
  return (
    <div>
<Container>
<Form onSubmit={handleSubmit(onSubmit)} double={double}>
  <FormSection />
    <FormSubmit />
</Form>
</Container>
    </div>
  );
};

export default App;