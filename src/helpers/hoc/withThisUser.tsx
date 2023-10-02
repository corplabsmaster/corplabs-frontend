import React from "react";
import { useQuery } from "@apollo/client";
import { queries } from "@helpers/queryStrings";
import { getUser } from "@services/auth";

const withThisUser =
  (ComponentToWrap: any) =>
  (props: any): Promise<void> => {
    const { id } = getUser();
    const { data, loading, refetch } = useQuery(queries.user, {
      variables: { id: Number(id) },
    });

    return (
      <ComponentToWrap
        {...props}
        userDetails={data && data.user}
        role={data && data.user.role.name}
        loading={loading}
        userDetailsRefetch={refetch}
      />
    );
  };

export default withThisUser;
