import React from "react";
function Home() {
  const tableData = [
    { id: 1, name: "Task 1", link: "/task1", github: "" },
    { id: 2, name: "Task 2", link: "/task2", github: "" },
    { id: 3, name: "Task 3", link: "/task3", github: "" },
    { id: 4, name: "Task 4", link: "/task4", github: "" },
    { id: 5, name: "Task 5", link: "/task5", github: "" },
    { id: 6, name: "Task 6", link: "/task6", github: "" },
  ];
  return (
    <>
      <h2 className="text-center m-4">MERN Projects [Set-2]</h2>
      <div className=" flex justify-center items-center">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Link
                </th>
                <th scope="col" class="px-6 py-3">
                  github
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => {
                return (
                  <tr class="bg-white border-b ">
                    <td class="px-6 py-4">{item.id}</td>
                    <td class="px-6 py-4">{item.name}</td>
                    <td class="px-6 py-4 text-blue-800">
                      <a href={item.link}> {item.name}</a>
                    </td>
                    <td class="px-6 py-4 text-blue-800">
                      <a href={item.github}> {item.name}</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
