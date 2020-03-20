import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is:{props.info}</p>
  </div>
);

// const withAdminWarning = WrappedComponent => {
//   return props => (
//     <div>
//       {props.isAdmin && <p>This is a secret.Never share with others.</p>}
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Unauthorized!</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);
// const AdminInfo = withAdminWarning(Info);
// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="There are the details" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="There are the details" />,
  document.getElementById("app")
);
