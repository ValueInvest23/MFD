import { useState, useEffect } from "react";
import { Eye, EyeOff, RefreshCcw } from "lucide-react";

export default function AuthComponent() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [errors, setErrors] = useState({});
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setCaptchaInput("");
    generateCaptcha();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.trim() === "") {
      setErrors((prev) => ({ ...prev, [name]: "This field is mandatory" }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = isLogin
      ? ["username", "password", "captchaInput"]
      : ["name", "pan", "email", "mobile", "password", "confirmPassword"];

    let hasError = false;
    const newErrors = {};
    fields.forEach((field) => {
      const value = e.target[field]?.value;
      if (!value || value.trim() === "") {
        newErrors[field] = "This field is mandatory";
        hasError = true;
      }
    });

    if (isLogin && captchaInput !== captcha) {
      newErrors.captchaInput = "Captcha does not match";
      hasError = true;
    }

    setErrors(newErrors);
    if (!hasError) {
      alert("Form submitted");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md transition-all duration-500">
        {showForgotPassword ? (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
            <div>
              <input
                type="email"
                name="forgotPasswordEmail"
                placeholder="Enter your email"
                className="w-full p-2 hover:border-blue-500  rounded bg-gray-700 border border-gray-600 focus:outline-none"
                value={forgotPasswordEmail}
                onChange={(e) => setForgotPasswordEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded mt-2"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowForgotPassword(false)}
              className="inline-block text-blue-500 font-medium transform transition duration-300 hover:scale-105 hover:text-blue-700"
            >
              Back to Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Register"}</h2>

            {isLogin ? (
              <>
                <div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    className="w-full p-2 rounded hover:border-blue-500  bg-gray-700 border border-gray-600 focus:outline-none"
                  />
                  {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full p-2 hover:border-blue-500  rounded bg-gray-700 border border-gray-600 focus:outline-none"
                  />
                  <span
                    className="absolute right-3 top-2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="captchaInput"
                    placeholder="Enter captcha"
                    value={captchaInput}
                    onChange={(e) => {
                      setCaptchaInput(e.target.value);
                      handleChange(e);
                    }}
                    className="w-full p-2 hover:border-blue-500  rounded bg-gray-700 border border-gray-600 focus:outline-none"
                  />
                  {errors.captchaInput && (
                    <p className="text-red-500 text-sm">{errors.captchaInput}</p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded animate-wave animate-distort animate-flicker tracking-widest">{captcha}</span>
                  <RefreshCcw
                    className="cursor-pointer text-white hover:rotate-180 transition-transform duration-300"
                    onClick={generateCaptcha}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="inline-block text-blue-500 font-medium transform transition duration-300 hover:scale-105 hover:text-blue-700"
                >
                  Forgot Password?
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "name", placeholder: "Name" },
                  { name: "pan", placeholder: "PAN Number" },
                  { name: "email", placeholder: "Email" },
                  { name: "mobile", placeholder: "Mobile" },
                ].map((field) => (
                  <div key={field.name} className="col-span-1">
                    <input
                      type="text"
                      name={field.name}
                      placeholder={field.placeholder}
                      onChange={handleChange}
                      className="w-full p-2 hover:border-blue-500 rounded bg-gray-700 border border-gray-600 focus:outline-none"
                    />
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm">{errors[field.name]}</p>
                    )}
                  </div>
                ))}
                <div className="relative col-span-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full p-2 hover:border-blue-500  rounded bg-gray-700 border border-gray-600 focus:outline-none"
                  />
                  <span
                    className="absolute right-3 top-2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div className="relative col-span-1">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    className="w-full p-2 hover:border-blue-500  rounded bg-gray-700 border border-gray-600 focus:outline-none"
                  />
                  <span
                    className="absolute right-3 top-2 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                  )}
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
                  >
                    Register
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
        <button
          onClick={handleSwitch}
          className="mt-4 text-blue-400 hover:underline w-full "
        >
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
}
