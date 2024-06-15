import React from 'react';

function ComposeEmail() {
  return (
    <div className="container">
      <h1>Proposing Legal Reforms</h1>
      <form action="#" method="post">
        <label htmlFor="from">From:</label>
        <input type="text" id="from" name="from" required />

        <label htmlFor="to">To:</label>
        <input type="text" id="to" name="to" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="brief_description">Brief Description:</label>
        <textarea id="brief_description" name="brief_description" rows="5" required></textarea>

        <label htmlFor="probable_changes">Probable Changes:</label>
        <textarea id="probable_changes" name="probable_changes" rows="5" required></textarea>

        <label htmlFor="impact">Impact of This Step:</label>
        <textarea id="impact" name="impact" rows="5" required></textarea>

        <label htmlFor="laws_involved">Laws Involved:</label>
        <textarea id="laws_involved" name="laws_involved" rows="5" required></textarea>

        <input type="file" id="attachments" name="attachments" accept=".pdf,.doc,.docx,.txt" />

        <input type="submit" value="Send" />
        <input type="button" value="Cancel" />
      </form>
    </div>
  );
}

export default ComposeEmail;