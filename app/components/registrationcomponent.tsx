"use client";

export function RegisterUsername() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[24px] font-semibold">Set your username</p>
      <p className="text-[16px]">This will be your username alongside the domain</p>
    </div>
  );
}

export function RegisterPassword() {


  return (
    <div className="flex flex-col gap-4">
      <p className="text-[24px] font-semibold">Set your display name</p>
      <p className="text-[16px]">This will be your pen name</p>
    </div>
  );
}