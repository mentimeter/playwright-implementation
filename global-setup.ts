const globalSetup = async () => {
  // Create a FormData object
  const formData = new FormData();

  formData.append("name", "oliver_session_1");
  formData.append("description", "sadfdsf");
  formData.append("type", "IS");
  formData.append("email", "sdf@sdfkj.com");
  formData.append("country", "AL");
  formData.append("picture_author", "SDsfsdf");
  formData.append("picture_author_link", "");
  formData.append("picture_license", "");
  formData.append("picture_license_link", "");
  formData.append("start_date", "2023-05-17");
  formData.append("end_date", "2023-05-14");
  formData.append("website", "");
  formData.append("facebook", "");
  formData.append("twitter", "");
  formData.append("topic_overviews", "");
  formData.append("resolutions", "");
  formData.append("statistics", "S");
  formData.append("voting_enabled", "on");
  formData.append("gender_statistics", "on");
  formData.append("number_female_participants", "");
  formData.append("number_male_participants", "");
  formData.append("number_other_participants", "");
  formData.append("max_rounds", "3");
  formData.append("admin_password", "123456");
  formData.append("submission_password", "123456");

  // Create a fake image Blob
  const fakeImageData = new Uint8Array([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d,
    0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
    0x08, 0x06, 0x00, 0x00, 0x00, 0x1f, 0x15, 0xc4, 0x89, 0x00, 0x00, 0x00,
    0x0a, 0x49, 0x44, 0x41, 0x54, 0x78, 0x9c, 0x63, 0x00, 0x01, 0x00, 0x00,
    0x05, 0x00, 0x01, 0x0d, 0x0a, 0x2d, 0xb4, 0x00, 0x00, 0x00, 0x00, 0x49,
    0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
  ]); // This is a 1x1 transparent PNG image

  const fakeImageBlob = new Blob([fakeImageData], { type: "image/png" });

  formData.append("picture", fakeImageBlob, "fake-image.png");

  await fetch("https://rtc-stats.herokuapp.com/create_session/", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export default globalSetup;
