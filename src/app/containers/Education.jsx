import { FaGraduationCap } from "react-icons/fa";
function Education() {
  return (
    <section id="education" className=" mx-auto  my-24 md:px-5">
      <h2 className="text-sm  flex items-center gap-3 mb-8"><FaGraduationCap/>Education</h2>
      <div className="shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-500  text-left text-xs font-semibold  uppercase tracking-wider">
                Year
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-500  text-left text-xs font-semibold  uppercase tracking-wider">
                Course
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-5 py-5 border-b border-gray-500   text-sm">
                2020-2023
              </td>
              <td className="px-5 py-5 border-b border-gray-500  text-sm ">
                <h3 className="font-semibold">Degree</h3>
                <p>BSc Computer Science</p>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 border-b border-gray-500   text-sm">
                2018-2020
              </td>
              <td className="px-5 py-5 border-b border-gray-500  text-sm ">
                <h3 className="font-semibold">+2</h3>
                <p>Computer Science</p>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 border-b border-gray-500   text-sm">
                2017
              </td>
              <td className="px-5 py-5 border-b border-gray-500  text-sm ">
                <h3 className="font-semibold">10th</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Education;
