import { useEffect, useState } from "react";
import { Layout } from "../../shared/components/layout";
import { Select } from "../../shared/components/select";
import { User } from "../../users/domain/user";
import { Modal } from "../../shared/components/modal";
import { Form } from "../../shared/components/form";
import { TextInput } from "../../shared/components/text-input";
import { AddUserModal } from "../components/add-user-modal";

type SelectOption = "edit" | "delete" | "";

export const DashboardView = ({ users }: { users: User[] | undefined }) => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [selectOption, setSelectOption] = useState<SelectOption>("");
  const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);

  useEffect(() => {
    if (selectOption === "edit") setShowEditUserModal(true);
    if (selectOption === "delete") setShowDeleteUserModal(true);
  }, [selectOption]);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Users Dashboard</h1>
        <button onClick={() => setShowAddUserModal(true)}>Add new user</button>
      </div>

      {/* move into /shared components */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Select
                  value={selectOption}
                  onChange={(e) =>
                    setSelectOption(e.target.value as SelectOption)
                  }
                  options={[
                    { label: "Edit user", value: "edit" },
                    { label: "Delete user", value: "delete" },
                  ]}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddUserModal && (
        <AddUserModal onClose={() => setShowAddUserModal(false)} />
      )}
    </Layout>
  );
};
