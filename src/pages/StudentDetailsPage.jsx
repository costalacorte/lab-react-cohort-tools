import { useParams, Link } from "react-router-dom";
import placeholderImage from "./../assets/placeholder.png";
import studentsData from "./../assets/students.json";

function StudentDetailsPage() {
  
  const { studentId } = useParams();

  
  const studentProfile = studentsData.find((student) => student._id === studentId);

  
  if (!studentProfile) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Student not found</h1>
        <Link to="/">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="StudentDetailsPage bg-gray-100 py-6 px-4 border-2 border-fuchsia-500 m-2">
      <h1 className="text-2xl font-bold mb-4">Student Details Page</h1>
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <>
          <img
            src={studentProfile.image || placeholderImage}
            alt="profile-photo"
            className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
          />
          <h1 className="text-2xl mt-4 font-bold">
            {studentProfile.firstName} {studentProfile.lastName}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-4 border-b pb-4">
            <p className="text-left mb-2 border-b pb-2">
              <strong>LinkedIn:</strong>{" "}
              <a
                href={studentProfile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="ml-2 text-blue-500 hover:underline"
              >
                {studentProfile.linkedinUrl}
              </a>
            </p>

            <p className="text-left mb-2 border-b pb-2">
              <strong>Email:</strong>{" "}
              <span className="ml-2 text-blue-500 hover:underline">
                {studentProfile.email}
              </span>
            </p>

            <p className="text-left mb-2 border-b pb-2">
              <strong>Languages:</strong>{" "}
              {studentProfile.languages.join(", ")}
            </p>

            <p className="text-left mb-2 border-b pb-2">
              <strong>Program:</strong> {studentProfile.program}
            </p>

            <p className="text-left mb-2 pb-2">
              <strong>Background:</strong> {studentProfile.background}
            </p>

            <p className="text-left mb-2 pb-2">
              <strong>Cohort:</strong>{" "}
              <span className="ml-2 text-blue-500 hover:underline">
                {studentProfile.cohort}
              </span>
            </p>
          </div>

          {/* Back button */}
          <Link to="/">
            <button className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out">
              Back to Home
            </button>
          </Link>
        </>
      </div>
    </div>
  );
}

export default StudentDetailsPage;
