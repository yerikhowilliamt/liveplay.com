import AuthContainer from "../AuthContainer";


const SignUpPage = () => {
  return (
    <div className="mt-24 rounded-lg bg-black/80 py-10 px-6 md:mt-0 md:w-[400px] md:px-14 backdrop-blur-sm">
      <AuthContainer label="Sign Up" page="signup"/>
    </div>
  );
};

export default SignUpPage;
