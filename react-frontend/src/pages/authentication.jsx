import { useState } from "react";
import Button from "@/components/button";
import { loginAPI, getUserProfileAPI, signupAPI } from "@/APIs/api";
import { useAuth } from "@/context/AuthProvider";
import { useNavigate } from "react-router-dom";

const AuthForms = () => {
  const [isLogin, setIsLogin] = useState(false);


  return (
    <section className="bg-white w-full dark:bg-gray-900 my-auto bg-cover lg:bg-none ">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <ImageSection />

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          {isLogin ? (
            <Signup setIsLogin={setIsLogin} />
          ) : (
            <Login setIsLogin={setIsLogin} />
          )}
        </main>
      </div>
    </section>
  );
};

const ImageSection = () => {
  return (
    <section className="relative hidden lg:flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1674834727206-4bc272bfd8da?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="hidden lg:relative lg:block lg:p-12">
        <a className="block text-white" href="#">
          <span className="sr-only">Home</span>
          <svg
            className="h-8 sm:h-10"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to My FitnessPal 🦑
        </h2>
        <p className="mt-4 leading-relaxed text-white/90">
          Achieve your fitness goals with My FitnessPal – track workouts,
          monitor progress, and stay motivated every step of the way!
        </p>
      </div>
    </section>
  );
};

const Signup = ({ setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [age, setAge] = useState(1);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const handleClick = async (e) => {
    e.preventDefault()

    if(age<1 || weight<30 || height < 50 )
      return;

    try{
      const response = await signupAPI(username, password, email, age, height, weight);
      if (response.status === 201){
        setTimeout(() => {
          setIsLogin(false);
          alert("Account created successfully");
        }, 200)
        
      }
      else{
        alert("Error creating account");
      }
    } catch (error) {
      alert("error creating account")
    }
  }

  return (
    <div className="max-w-xl lg:max-w-3xl">
      <div className="text-center mb-0">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">Create Your Account</h2>
      </div>
      <form action="#" className="mt-8 grid grid-cols-6 gap-4">
          
        <UsernameInput username={username} setUsername={setUsername}/>

        <div className="col-span-6 ">
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            className="mt-1 w-full rounded-md focus:ring-0 focus:border-accentBackground border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        <div className="col-span-6 sm:col-span-2">
          <label
            htmlFor="Age"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Age
          </label>
          <input
            type="number"
            id="Age"
            name="age"
            min="1"
            max="100"
            value={age}
            onChange={(e) => {setAge(e.target.value)}}
            required
            className="mt-1 w-full rounded-md focus:ring-0 focus:border-accentBackground border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        <div className="col-span-6 sm:col-span-2">
          <label
            htmlFor="Weight"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Weight
          </label>
          <input
            type="number"
            id="Weight"
            name="weight"
            min="20"
            max="200"
            value={weight}
            onChange={(e) => {setWeight(e.target.value)}}
            required
            placeholder="Kg"
            className="mt-1 w-full rounded-md focus:ring-0 focus:border-accentBackground border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        <div className="col-span-6 sm:col-span-2">
          <label
            htmlFor="Height"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Height
          </label>
          <input
            type="number"
            id="Height"
            name="height"
            min="100"
            max="250"
            value={height}
            onChange={(e) => {setHeight(e.target.value)}}
            required
            placeholder="Cm"
            className="mt-1 w-full rounded-md focus:ring-0 focus:border-accentBackground border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        <PasswordInput password={password} setPassword={setPassword}/>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="PasswordConfirmation"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Password Confirmation
          </label>
          <input
            type="password"
            id="PasswordConfirmation"
            name="password_confirmation"
            required
            className="mt-1 w-full rounded-md focus:ring-0 focus:border-accentBackground border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div className="col-span-6">
          <label htmlFor="MarketingAccept" className="flex gap-4">
            <input
              type="checkbox"
              id="MarketingAccept"
              name="marketing_accept"
              className="size-5 rounded-md focus:outline-none focus:ring-0 checked:text-accentBackground border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
            />
            <span className="text-sm text-gray-700 dark:text-gray-200">
              I want to receive emails about events, product updates and company
              announcements.
            </span>
          </label>
        </div>
        <div className="col-span-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            By creating an account, you agree to our
            <a
              href="#"
              className="text-accentBackground underline mx-1 dark:text-gray-200"
            >
              terms and conditions
            </a>
            and
            <a
              href="#"
              className="text-accentBackground underline dark:text-gray-200"
            >
              {" "}
              privacy policy{" "}
            </a>
            .
          </p>
        </div>
        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <Button className="inline-block shrink-0 rounded-md border border-accentBackground bg-accentBackground px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-accentBackground focus:outline-none focus:ring active:text-accentBackground dark:hover:bg-blue-700 dark:hover:text-white"
            onClick={handleClick}
          >
            Create an account</Button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
            Already have an account?
            <a
              href="#"
              className="text-accentBackground ml-1 underline dark:text-gray-200"
              onClick={(e) => {
                setIsLogin(false);
                e.preventDefault();
              }}
            >
              Log in
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

const Login = ({ setIsLogin }) => {
  const { login } = useAuth();
  const { setAccess } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      const response = await loginAPI(username, password);

      if (response.access){
        // add bearer token to api and sets accessToken value
        setAccess(response.access);
        const userdata = await getUserData();
        if(userdata){
          login(userdata, response.access);
          navigate('/dashboard');
        }
        else{
          alert('Error fetching user data');
        }
      }
      else{
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
    }
  }

  const getUserData = async () => {
    try {
      const response = await getUserProfileAPI();
      return response;
    } catch (error) {
      alert('Error fetching user data');
    }
  }

  return (
    <div className="max-w-xl lg:max-w-3xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">Welcome Back!</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Log in to continue tracking your fitness journey.
        </p>
      </div>
      <form action="#" className="mt-8 grid grid-cols-6 gap-6">
        <UsernameInput username={username} setUsername={setUsername}/>
        <PasswordInput password={password} setPassword={setPassword} colSpan="sm:col-span-6" />
        <div className="col-span-6 flex items-center justify-between">
          <label htmlFor="RememberMe" className="flex items-center">
            <input
              type="checkbox"
              id="RememberMe"
              name="remember_me"
              className="h-4 w-4 text-accentBackground border-gray-300 rounded focus:ring-accentBackground dark:bg-gray-800 dark:border-gray-700"
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
          </label>
          <a href="#" className="text-sm text-accentBackground hover:underline dark:text-gray-200">
            Forgot password?
          </a>
        </div>
        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button className="inline-block shrink-0 rounded-md border border-accentBackground bg-accentBackground px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-accentBackground focus:outline-none focus:ring active:text-accentBackground dark:hover:bg-blue-700 dark:hover:text-white"
            onClick={handleClick}
          >
            Log in
          </button>
          <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
            Don't have an account?
            <a
              href="#"
              className="text-accentBackground ml-1 underline dark:text-gray-200"
              onClick={(e) => {
                setIsLogin(true);
                e.preventDefault();
              }}
            >
              Sign up
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

const UsernameInput = ({username, setUsername}) => {
  return (
    <div className="col-span-6">
      <label
        htmlFor="name"
        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="mt-1 w-full rounded-md focus:ring-0 focus:border-accentBackground border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
      />
    </div>
  );
};

const PasswordInput = ({password, setPassword, colSpan='sm:col-span-3'}) => {
  return (
    <div className={`col-span-6 ${colSpan}`}>
      <label
        htmlFor="Password"
        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        Password
      </label>
      <input
        type="password"
        id="Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="mt-1 w-full rounded-md focus:ring-0 focus:border-accentBackground border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
      />
    </div>
  );
};

export default AuthForms;
