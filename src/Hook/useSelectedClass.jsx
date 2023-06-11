import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';
import { getShoppingCart } from '../utilities/fakedb';

const useSelectedClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(
      ["singleClass"],
      async () => {
        const res = await axiosSecure(`/approvedClass`);
        return res.data;
      }
    );
    const checked = getShoppingCart();
    const selected = Object.keys(checked);
    const locData = [];
    selected.forEach((check) => {
      const supData = classes.filter((checkId) => checkId._id === check);
      locData.push(...supData);
    });
    return locData;
};

export default useSelectedClass;