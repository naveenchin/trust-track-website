import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface DemoRequest {
  name: string;
  email: string;
  company?: string;
  industry: string;
  complianceNeeds: string;
  timeline: string;
  message?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const demoRequest: DemoRequest = await req.json();
    const RESEND_API_KEY = "re_ffrfnkb5_H8rwDud3wuF5rhVzmwbTkCj1";

    const emailHtml = `
      <h2>New Demo Request from TrustTrack Website</h2>
      
      <h3>Contact Information</h3>
      <ul>
        <li><strong>Name:</strong> ${demoRequest.name}</li>
        <li><strong>Email:</strong> ${demoRequest.email}</li>
        <li><strong>Company:</strong> ${demoRequest.company || 'Not provided'}</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li><strong>Industry:</strong> ${demoRequest.industry}</li>
        <li><strong>Compliance Needs:</strong> ${demoRequest.complianceNeeds}</li>
        <li><strong>Timeline:</strong> ${demoRequest.timeline}</li>
      </ul>
      
      ${demoRequest.message ? `
      <h3>Additional Message</h3>
      <p>${demoRequest.message}</p>
      ` : ''}
      
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `;

    const emailText = `
New Demo Request from TrustTrack Website

Contact Information:
Name: ${demoRequest.name}
Email: ${demoRequest.email}
Company: ${demoRequest.company || 'Not provided'}

Requirements:
Industry: ${demoRequest.industry}
Compliance Needs: ${demoRequest.complianceNeeds}
Timeline: ${demoRequest.timeline}

${demoRequest.message ? `Additional Message:\n${demoRequest.message}\n\n` : ''}
Submitted at: ${new Date().toLocaleString()}
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "TrustTrack Demo <onboarding@resend.dev>",
        to: [
          "naveen@trusttrack.io",
          "arun@trusttrack.io",
          "arpit@trusttrack.io"
        ],
        subject: `New Demo Request from ${demoRequest.name} - ${demoRequest.complianceNeeds}`,
        html: emailHtml,
        text: emailText,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const data = await res.json();

    return new Response(
      JSON.stringify({ success: true, messageId: data.id }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error" 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});