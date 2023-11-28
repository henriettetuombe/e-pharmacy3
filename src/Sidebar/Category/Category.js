import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark"></span>All
      </label>
      <div>
        <Input
          handleChange={handleChange}
          value="BabyCare"
          title="BabyCare"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Personal Care"
          title="Personal Care"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Health Concerns"
          title="Health Concerns"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Health Device"
          title="Health Device"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Women Care"
          title="Women Care"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Home Essentials"
          title="Home Essentials"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Health Condition"
          title="Health Condition"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;