import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <html>
      <body className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800">
        <Card className="max-w-md w-full p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
              Something went wrong!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center mt-4">
            <p className="text-gray-600 dark:text-gray-400">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </CardContent>
        </Card>
      </body>
    </html>
  );
}
