import React from "react";

const Data = () => {
  return (
    <div className="mx-55 my-20">
      <div className="text-center mx-90">
        <h2 className="text-3xl font-bold tracking-tight text-white ">
          Tourist Statistics
        </h2>
        <p className="mt-4 text-lg leading-8 text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam
          provident quam, eius autem voluptas quia? Molestiae animi
          voluptatibus, quibusdam in enim dolore illo repudiandae fugiat
          assumenda incidunt amet recusandae.
        </p>
      </div>
      <dl className="mt-8 mx-35 grid grid-cols-3 gap-0.5 overflow-hidden rounded-2xl text-center ">
        <div className="flex flex-col bg-red-400/50 p-8">
          <dt className="text-sm font-semibold leading-6 text-white">
            Tourist
          </dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-white">
            1,003,587
          </dd>
        </div>
        <div className="flex flex-col bg-gray-400/50 p-8">
          <dt className="text-sm font-semibold leading-6 text-white">
            Tourist
          </dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-white">
            $12,312
          </dd>
        </div>
        <div className="flex flex-col bg-yellow-400/50 p-8">
          <dt className="text-sm font-semibold leading-6 text-white">
            Tourist
          </dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-white">
            100%
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Data;
