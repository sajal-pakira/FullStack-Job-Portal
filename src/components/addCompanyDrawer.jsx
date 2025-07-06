import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Company name is required" }),
});

const AddCompanyDrawer = (fetchCompanies) => {
  return <div>AddCompanyDrawer</div>;
};

export default AddCompanyDrawer;
