import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./activitycard.css";
import { addparticipation } from '../JS/participationSlice';

function Detail() {
  const user = useSelector((state) => state.user.user);
  const activites = useSelector((state) => state.activite.activitelist);
  const dispatch = useDispatch();
  const params = useParams();

  const activite = activites?.find((el) => el._id === params.id);

  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = () => {
    // Add validation to ensure fields are filled
    if (!age || !phone || !date) {
      alert("Please fill in all fields (age, phone, and date)");
      return;
    }

    // Debug logs to check what we're sending
    console.log("Form values:", { age, phone, date });
    console.log("User:", user);
    console.log("Activity:", activite);

    const newParticipation = {
      nameuser: `${user?.name || ''} ${user?.lastname || ''}`.trim(),
      activity: activite?.nameactivite || '',
      age: parseInt(age, 10), // Make sure age is properly converted to number
      phone: phone.trim(), // Remove any extra whitespace
      date: date,
      status: "non confirmé"
    };

    console.log("Final participation object:", newParticipation);

    dispatch(addparticipation(newParticipation))
      .then((result) => {
        console.log("Dispatch result:", result);
        if (result.type.endsWith('/fulfilled')) {
          alert("Thanks for your participation!");
          // Reset form only after successful submission
          setAge('');
          setPhone('');
          setDate('');
        } else {
          alert("Error adding participation. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error adding participation. Please try again.");
      });
  };

  return (
    <div>
      <section className='sec3'></section>
      <div className='activitedetail'>
        <div><img src={activite?.image} alt="Activity" /></div>
        <div>
          <h3>{activite?.nameactivite}</h3>
          <h5>{activite?.category}</h5>
          <ul>
            <li>Price: {activite?.prix} TND</li>
            <li>Coach: Chamessedin Habil</li>
          </ul>
          <table>
            <tbody>
              <tr>
                <td>Start Date</td>
                <td>
                  <input
                    type='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Enter your age</td>
                <td>
                  <input
                    type='number'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    min="1"
                    max="120"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Enter your phone</td>
                <td>
                  <input
                    type='tel'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <button onClick={handleAdd}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;