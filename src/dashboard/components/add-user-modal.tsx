import { useState } from "react";
import { Form } from "../../shared/components/form";
import { Modal } from "../../shared/components/modal";
import { TextInput } from "../../shared/components/text-input";
import { Role } from "../../users/domain/user";
import { Select } from "../../shared/components/select";

export const AddUserModal = ({ onClose }: { onClose: () => void }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [role, setRole] = useState<Role>("user");

  type Data = {
    firstName: string;
    lastName: string;
    role: Role;
  };

  const handleSubmit = (data: Data) => {
    // make api request
    console.log(data);
  };

  return (
    <Modal title="Add user" onClose={onClose}>
      <Form handleSubmit={() => handleSubmit({ firstName, lastName, role })}>
        <TextInput
          label="First name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <TextInput
          label="Last name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <Select
          label="Select role"
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          options={[
            { label: "Admin", value: "admin" },
            { label: "User", value: "user" },
          ]}
        />
        <button type="submit">Add user</button>
      </Form>
    </Modal>
  );
};
