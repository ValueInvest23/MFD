import { useRef } from "react";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CreateClientForm = () => {
  const inputRefs = useRef({});
  //all input fileds
  const inputFields = [
    {
      type: "select",
      name: "salutation",
      label: "Salutation",
      options: ["Mr", "Ms", "Shri"]
    },
    {
      type: "text",
      name: "name",
      label: "Name"
    },
    {
      type: "text",
      name: "pan",
      label: "PAN"
    },
    {
      type: "number",
      name: "mobileNumber",
      label: "Mobile Number"
    },
    {
      type: "number",
      name: "alternateMobileNumber",
      label: "Alternate Mobile Number"
    },
    {
      type: "text",
      name: "emailAddress",
      label: "Email Address"
    },
    {
      type: "text",
      name: "alternateEmailAddress",
      label: "Alternate Email Address"
    },
    {
      type: "date",
      name: "dateOfBirth",
      label: "Date of Birth"
    },

    {
      type: "date",
      name: "anniversaryDate",
      label: "Anniversary Date"
    },
    {
      type: "select",
      name: "gender",
      label: "Gender",
      options: ["Male", "Female", "Transxender"]
    },
    {
      type: "text",
      name: "occupation",
      label: "Occupation"
    },
    {
      type: "text",
      name: "telOff",
      label: "Telephone (Office)"
    },
    {
      type: "text",
      name: "telRes",
      label: "Telephone (Residence)"
    },
    {
      type: "text",
      name: "pinCode",
      label: "PIN Code"
    },
    {
      type: "text",
      name: "address1",
      label: "Address Line 1"
    },
    {
      type: "text",
      name: "address2",
      label: "Address Line 2"
    },
    {
      type: "text",
      name: "address3",
      label: "Address Line 3"
    },
    {
      type: "text",
      name: "city",
      label: "City"
    },
    {
      type: "text",
      name: "state",
      label: "State"
    },
    {
      type: "text",
      name: "country",
      label: "Country"
    },
    {
      type: "text",
      name: "parentGuardianName",
      label: "Parent/Guardian Name"
    },
    {
      type: "text",
      name: "guardianPan",
      label: "Guardian PAN"
    },
    {
      type: "select",
      name: "rmName",
      label: "RM Name",
      options: ["RM 1", "RM 2", "RM 3"] // You can update these
    },
    {
      type: "select",
      name: "associateName",
      label: "Associate Name",
      options: ["Associate 1", "Associate 2"]
    },
    {
      type: "select",
      name: "clientStatus",
      label: "Client Status",
      options: ["Active", "Inactive"]
    },
    {
      type: "select",
      name: "arnNumber",
      label: "ARN Number",
      options: ["ARN001", "ARN002"]
    },
    {
      type: "select",
      name: "customerType",
      label: "Customer Type",
      options: ["Individual", "Corporate"]
    },
    {
      type: "select",
      name: "loginStatus",
      label: "Login Status",
      options: ["Active", "Disabled"]
    }
  ];
  //all file fileds
  const uploadFileds = ["Pan card", "Passbook / Latest-Statement", "Other document for eCAN"];
  //for form data
  const [formData, setFormData] = useState({
    salutation: "",
    name: "",
    pan: "",
    mobileNumber: "",
    alternateMobileNumber: "",
    emailAddress: "",
    alternateEmailAddress: "",
    dateOfBirth: "",
    dateOfBirthGreeting: "",
    anniversaryDate: "",
    gender: "",
    occupation: "",
    telOff: "",
    telRes: "",
    pinCode: "",
    address1: "",
    address2: "",
    address3: "",
    city: "",
    state: "",
    country: "",
    parentGuardianName: "",
    guardianPan: "",
    rmName: "",
    associateName: "",
    clientStatus: "",
    arnNumber: "",
    customerType: "",
    loginStatus: "",
  });
  //state for dropdown menu icon state management
  const [dropdownState, setDropdownState] = useState({});
  //selected file state management 
  const [selectedFiles, setSelectedFiles] = useState({});
  const [preview, setPreview] = useState({});
  //state management of the selection input fileds
  const setDropdown = Object.fromEntries(
    inputFields
      .filter(f => f.type === "select")
      .map(f => [f.name, (val) => setDropdownState((prev) => ({ ...prev, [f.name]: val }))])
  );
  //for when change the upload image file
  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFiles((prev) => ({ ...prev, [key]: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview((prev) => ({ ...prev, [key]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  //for remove selected file
  const removeFile = (key) => {
    setSelectedFiles((prev) => ({ ...prev, [key]: null }));
    setPreview((prev) => ({ ...prev, [key]: null }));


    // ✅ Clear the actual input field
    if (inputRefs.current[key]) {
      inputRefs.current[key].value = "";
    }
  };
  //for state-management of the input fileds
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  //toggle dropdown icons up and down
  const toggleDropdown = (setter, current) => {
    setter(!current);
  };
  //for form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    // Add form data
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // Add files (safe check)
    if (selectedFiles && typeof selectedFiles === "object") {
      Object.entries(selectedFiles).forEach(([key, file]) => {
        if (file) data.append(key, file);
      });
    }

    // Log data
    for (let pair of data.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    // Reset form and file previews
    setFormData({
      salutation: "",
      name: "",
      pan: "",
      mobileNumber: "",
      alternateMobileNumber: "",
      emailAddress: "",
      alternateEmailAddress: "",
      dateOfBirth: "",
      dateOfBirthGreeting: "",
      anniversaryDate: "",
      gender: "",
      occupation: "",
      telOff: "",
      telRes: "",
      pinCode: "",
      address1: "",
      address2: "",
      address3: "",
      city: "",
      state: "",
      country: "",
      parentGuardianName: "",
      guardianPan: "",
      rmName: "",
      associateName: "",
      clientStatus: "",
      arnNumber: "",
      customerType: "",
      loginStatus: "",
    });

    setSelectedFiles({});
    setPreview({});

    // ✅ Clear file input elements
    Object.keys(inputRefs.current).forEach((key) => {
      if (inputRefs.current[key]) {
        inputRefs.current[key].value = "";
      }
    });
  };


  // cancel button logic
  const handleCancel = () => {
    setFormData({
      salutation: "",
      name: "",
      pan: "",
      mobileNumber: "",
      alternateMobileNumber: "",
      emailAddress: "",
      alternateEmailAddress: "",
      dateOfBirth: "",
      dateOfBirthGreeting: "",
      anniversaryDate: "",
      gender: "",
      occupation: "",
      telOff: "",
      telRes: "",
      pinCode: "",
      address1: "",
      address2: "",
      address3: "",
      city: "",
      state: "",
      country: "",
      parentGuardianName: "",
      guardianPan: "",
      rmName: "",
      associateName: "",
      clientStatus: "",
      arnNumber: "",
      customerType: "",
      loginStatus: "",
    });
    setSelectedFile(null);
    setPreview(null);
  };

  //for input fileds styling classnames 
  const inputClass =
    "peer w-full  rounded-tl-2xl rounded-br-2xl  border border-gray-500 bg-zinc-900 px-4 pt-5 pb-2 text-sm text-white placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200";
  //for selected fileds styling classnames 
  const selectClass =
    "peer block w-full appearance-none  rounded-tl-2xl rounded-br-2xl  border border-gray-400 bg-zinc-900 px-4 pt-6 pb-2 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 pr-10";
  //for label styling classnames
  const labelClass =
    "absolute -top-2 left-4 z-10  rounded-tl-2xl rounded-br-2xl  px-3 text-sm text-blue-400 bg-zinc-900 transition-all duration-200 transform scale-90 origin-top-left peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:bg-zinc-900 peer-placeholder-shown:scale-100 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-blue-400 peer-focus:bg-zinc-900 peer-focus:scale-90";


  return (
    <div className="min-h-screen bg-zinc-900 text-white py-6 px-9">
      <h1 className="text-center text-3xl font-semibold text-blue-400 mb-8">
        Create Client
      </h1>
      <form
        onSubmit={handleSubmit}
        className=""
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* for dynamically render the inputfileds by mapping */}
          {inputFields.map((field) => (
            <div className="relative w-full" key={field.name}>
              {field.type === "select" ? (
                <>
                  {/* for selection types fileds with option menus  */}
                  <select
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onClick={() => toggleDropdown(setDropdown[field.name], dropdownState[field.name])}
                    onBlur={() => setDropdown[field.name](false)}
                    className={selectClass}
                  >
                    <option value="" disabled hidden>
                      Select {field.label}
                    </option>
                    {field.options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <label htmlFor={field.name} className={labelClass}>
                    {field.label}
                  </label>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white">
                    {dropdownState[field.name] ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </>
              ) : (
                <>
                  {/* for input types fileds  */}
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.label}
                    className={inputClass}
                    autoComplete="off"
                  />
                  <label htmlFor={field.name} className={labelClass}>
                    {field.label}
                  </label>
                </>
              )}
            </div>
          ))}
        </div>
        <br />

        {/* File Upload Section */}
        <div className="mt-8 w-full max-w-screen-xl mx-auto bg-zinc-800 p-4 sm:p-6  rounded-tl-xl rounded-br-xl  shadow-lg border border-zinc-700">
          <h2 className="text-lg font-semibold text-blue-400 mb-4">
            Upload Documents (Images)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {uploadFileds.map((num) => {
              const key = `document${num}`;
              return (
                <div
                  key={key}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 bg-zinc-900 p-4 rounded-tl-lg rounded-br-lg border border-zinc-700 shadow-md w-full"
                >
                  <div className="flex-1 w-full">
                    <label className="block text-sm text-gray-300 font-medium mb-2">
                      {num}
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      ref={(el) => (inputRefs.current[key] = el)} // key = document1, document2 etc.
                      onChange={(e) => handleFileChange(e, key)}
                      className="w-full text-sm text-gray-200 file:bg-zinc-700 file:text-white file:rounded file:px-3 file:py-2 file:border-0 file:font-medium hover:file:bg-zinc-600"
                    />
                  </div>

                  {preview[key] && (
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                      <img
                        src={preview[key]}
                        alt="preview"
                        className="w-full sm:w-32 h-24 object-cover rounded border border-zinc-600"
                      />
                      <button
                        type="button"
                        onClick={() => removeFile(key)}
                        className="text-sm bg-red-600 px-3 py-1 rounded hover:bg-red-500 text-white"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-full flex justify-center gap-6 mt-4">
          <button
            type="submit"
            className="rounded-3xl bg-blue-600 px-6 py-2 font-semibold hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-3xl border border-blue-600 px-6 py-2 font-semibold text-blue-600 hover:bg-red-600  hover:border-red-600 hover:text-white transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateClientForm;
