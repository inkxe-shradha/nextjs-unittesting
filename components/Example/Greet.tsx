const Greet = ({
  name,
  techStack,
}: {
  name: string;
  techStack?: Array<string>;
}) => {
  return (
    <div>
      <h1>Job application form - {name} </h1>
      <h2>Form section 2023</h2>
      <form data-testid="job-form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter the name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            value={'linkdin'}
            onChange={() => {}}
          ></textarea>
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select name="job-location" id="job-loc">
            <option value="">Select any options</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
            <option value="AR">Argentina</option>
          </select>
        </div>
        <div>
          <label htmlFor="checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" />
          </label>
        </div>
        <button>Submit</button>
      </form>

      {/* Loading the state list inside the Tree */}
      <ul>{techStack && techStack.map((ele) => <li key={ele}>{ele}</li>)}</ul>
    </div>
  );
};

export default Greet;
