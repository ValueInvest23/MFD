import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CreateClientForm = () => {
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

  const [rmOpen, setRmOpen] = useState(false);
  const [salutation, setSalutation] = useState(false);
  const [associateOpen, setAssociateOpen] = useState(false);
  const [clientStatusOpen, setClientStatusOpen] = useState(false);
  const [arnNumberOpen, setArnNumberOpen] = useState(false);
  const [customerTypeOpen, setCustomerTypeOpen] = useState(false);
  const [loginStatusOpen, setLoginStatusOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleDropdown = (setter, current) => {
    setter(!current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
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
  };

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
  };

  const inputClass =
    "peer w-full rounded-3xl border border-zinc-500 bg-zinc-900 px-4 pt-5 pb-2 text-sm text-white placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200";

  const selectClass =
    "peer block w-full appearance-none rounded-3xl border border-zinc-500 bg-zinc-900 px-4 pt-6 pb-2 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 pr-10";

  const labelClass =
    "absolute -top-2 left-4 z-10 rounded-xl px-3 text-sm text-blue-400 bg-zinc-900 transition-all duration-200 transform scale-90 origin-top-left peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:bg-zinc-900 peer-placeholder-shown:scale-100 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-blue-400 peer-focus:bg-zinc-900 peer-focus:scale-90";


  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <h1 className="text-center text-3xl font-semibold text-blue-400 mb-8">
        Create Client
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div className="relative w-full">
          <select
            id="salutation"
            name="salutation"
            value={formData.salutation}
            onChange={handleChange}
            onClick={() => toggleDropdown(setSalutation, salutation)}
            onBlur={() => setSalutation(false)}
            className={selectClass}
          >
            <option value="" disabled hidden>
              Select Salutation
            </option>
            <option value="RM 1">Mr</option>
            <option value="RM 2">Ms</option>
            <option value="RM 3">Shri</option>
          </select>
          <label htmlFor="rmName" className={labelClass}>
            Saluation
          </label>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white">
            {salutation ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="pan"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            placeholder="PAN"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="pan" className={labelClass}>
            PAN
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="mobileNumber" className={labelClass}>
            Mobile Number
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="alternateMobileNumber"
            name="alternateMobileNumber"
            value={formData.alternateMobileNumber}
            onChange={handleChange}
            placeholder="Alternate Mobile Number"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="alternateMobileNumber" className={labelClass}>
            Alternate Mobile Number
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Email Address"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="emailAddress" className={labelClass}>
            Email Address
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="email"
            id="alternateEmailAddress"
            name="alternateEmailAddress"
            value={formData.alternateEmailAddress}
            onChange={handleChange}
            placeholder="Alternate Email Address"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="alternateEmailAddress" className={labelClass}>
            Alternate Email Address
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            placeholder="Date of Birth"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="dateOfBirth" className={labelClass}>
            Date of Birth
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="date"
            id="dateOfBirthGreeting"
            name="dateOfBirthGreeting"
            value={formData.dateOfBirthGreeting}
            onChange={handleChange}
            placeholder="Date of Birth (Greeting)"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="dateOfBirthGreeting" className={labelClass}>
            Date of Birth (Greeting)
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="date"
            id="anniversaryDate"
            name="anniversaryDate"
            value={formData.anniversaryDate}
            onChange={handleChange}
            placeholder="Anniversary Date"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="anniversaryDate" className={labelClass}>
            Anniversary Date
          </label>
        </div>

        <div className="relative w-full">
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="" disabled hidden>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="gender" className={labelClass}>
            Select Gender
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Occupation"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="occupation" className={labelClass}>
            Occupation
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="telOff"
            name="telOff"
            value={formData.telOff}
            onChange={handleChange}
            placeholder="Tel (Off)"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="telOff" className={labelClass}>
            Tel (Off)
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="telRes"
            name="telRes"
            value={formData.telRes}
            onChange={handleChange}
            placeholder="Tel (Res)"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="telRes" className={labelClass}>
            Tel (Res)
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            placeholder="Pin Code"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="pinCode" className={labelClass}>
            Pin Code
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="address1"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            placeholder="Address1"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="address1" className={labelClass}>
            Address1
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="address2"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            placeholder="Address2"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="address2" className={labelClass}>
            Address2
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="address3"
            name="address3"
            value={formData.address3}
            onChange={handleChange}
            placeholder="Address3"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="address3" className={labelClass}>
            Address3
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="city" className={labelClass}>
            City
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="state" className={labelClass}>
            State
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="parentGuardianName"
            name="parentGuardianName"
            value={formData.parentGuardianName}
            onChange={handleChange}
            placeholder="Name of Parent or Guardian"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="parentGuardianName" className={labelClass}>
            Name of Parent or Guardian
          </label>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            id="guardianPan"
            name="guardianPan"
            value={formData.guardianPan}
            onChange={handleChange}
            placeholder="Guardian PAN"
            className={inputClass}
            autoComplete="off"
          />
          <label htmlFor="guardianPan" className={labelClass}>
            Guardian PAN
          </label>
        </div>

        <div className="relative w-full">
          <select
            id="rmName"
            name="rmName"
            value={formData.rmName}
            onChange={handleChange}
            onClick={() => toggleDropdown(setRmOpen, rmOpen)}
            onBlur={() => setRmOpen(false)}
            className={selectClass}
          >
            <option value="" disabled hidden>
              Select RM Name
            </option>
            <option value="RM 1">RM 1</option>
            <option value="RM 2">RM 2</option>
            <option value="RM 3">RM 3</option>
          </select>
          <label htmlFor="rmName" className={labelClass}>
            Select RM Name
          </label>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white">
            {rmOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        <div className="relative w-full">
          <select
            id="associateName"
            name="associateName"
            value={formData.associateName}
            onChange={handleChange}
            onClick={() => toggleDropdown(setAssociateOpen, associateOpen)}
            onBlur={() => setAssociateOpen(false)}
            className={selectClass}
          >
            <option value="" disabled hidden>
              Select Associate Name
            </option>
            <option value="Associate 1">Associate 1</option>
            <option value="Associate 2">Associate 2</option>
            <option value="Associate 3">Associate 3</option>
          </select>
          <label htmlFor="associateName" className={labelClass}>
            Select Associate Name
          </label>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white">
            {associateOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        <div className="relative w-full">
          <select
            id="clientStatus"
            name="clientStatus"
            value={formData.clientStatus}
            onChange={handleChange}
            onClick={() => toggleDropdown(setClientStatusOpen, clientStatusOpen)}
            onBlur={() => setClientStatusOpen(false)}
            className={selectClass}
          >
            <option value="" disabled hidden>
              Select Client Status
            </option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
          </select>
          <label htmlFor="clientStatus" className={labelClass}>
            Select Client Status
          </label>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white">
            {clientStatusOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        <div className="relative w-full">
          <select
            id="arnNumber"
            name="arnNumber"
            value={formData.arnNumber}
            onChange={handleChange}
            onClick={() => toggleDropdown(setArnNumberOpen, arnNumberOpen)}
            onBlur={() => setArnNumberOpen(false)}
            className={selectClass}
          >
            <option value="" disabled hidden>
              Select ARN Number
            </option>
            <option value="ARN 123">ARN 123</option>
            <option value="ARN 456">ARN 456</option>
            <option value="ARN 789">ARN 789</option>
          </select>
          <label htmlFor="arnNumber" className={labelClass}>
            Select ARN Number
          </label>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white">
            {arnNumberOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        <div className="relative w-full">
          <select
            id="customerType"
            name="customerType"
            value={formData.customerType}
            onChange={handleChange}
            onClick={() => toggleDropdown(setCustomerTypeOpen, customerTypeOpen)}
            onBlur={() => setCustomerTypeOpen(false)}
            className={selectClass}
          >
            <option value="" disabled hidden>
              Select Customer Type
            </option>
            <option value="Type A">Type A</option>
            <option value="Type B">Type B</option>
            <option value="Type C">Type C</option>
          </select>
          <label htmlFor="customerType" className={labelClass}>
            Select Customer Type
          </label>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white">
            {customerTypeOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        <div className="relative w-full">
          <select
            id="loginStatus"
            name="loginStatus"
            value={formData.loginStatus}
            onChange={handleChange}
            onClick={() => toggleDropdown(setLoginStatusOpen, loginStatusOpen)}
            onBlur={() => setLoginStatusOpen(false)}
            className={selectClass}
          >
            <option value="" disabled hidden>
              Select Login Status
            </option>
            <option value="Enabled">Enabled</option>
            <option value="Disabled">Disabled</option>
          </select>
          <label htmlFor="loginStatus" className={labelClass}>
            Select Login Status
          </label>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white ">
            {loginStatusOpen ? <FaChevronUp /> : <FaChevronDown />}
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
