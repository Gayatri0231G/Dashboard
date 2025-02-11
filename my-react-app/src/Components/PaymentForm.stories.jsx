import PaymentForm from "./PaymentForm";

export default {
  title: "Components/PaymentForm.jsx",
  component: PaymentForm,
};

const Template = (args) => <PaymentForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
