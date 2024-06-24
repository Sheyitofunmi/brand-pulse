import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconName } from "@fortawesome/fontawesome-svg-core";
import {
  faGoogle,
  faTwitter,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";

library.add(faGoogle, faTwitter, faYoutube, faFacebook);

interface ChannelData {
  source: string;
  visitors: string;
  revenues: string;
  conversion: string;
  icon: IconName;
}

const data: ChannelData[] = [
  {
    source: "Google",
    visitors: "3.5K",
    revenues: "$5,768",
    conversion: "4.8%",
    icon: "google",
  },
  {
    source: "Twitter",
    visitors: "2.2K",
    revenues: "$4,635",
    conversion: "4.3%",
    icon: "twitter",
  },
  {
    source: "Youtube",
    visitors: "2.1K",
    revenues: "$4,290",
    conversion: "3.7%",
    icon: "youtube",
  },

  {
    source: "Facebook",
    visitors: "3.5K",
    revenues: "$6,768",
    conversion: "4.2%",
    icon: "facebook",
  },
];

export function TopChannelsTable() {
  const getIconStyle = (iconName: string) => {
    switch (iconName) {
      case "google":
        return "text-blue-600";
      case "twitter":
        return "text-blue-400";
      case "youtube":
        return "text-red-600";
      case "vimeo":
        return "text-green-600";
      case "facebook":
        return "text-blue-800";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-w-full rounded-2xl shadow-md border-collapse text-center bg-white p-4">
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-[#2B3674] font-semibold text-lg">Top Channels</h1>
        <img
          src="/more_horiz.svg"
          alt=""
          className="bg-[#F4F7FE] p-1 rounded-[10px]"
        />
      </div>

      <Table className="text-center">
        <TableHeader>
          <TableRow className="text-[#A3AED0] text-sm text-center">
            <TableHead>Source</TableHead>
            <TableHead>Visitors</TableHead>
            <TableHead>Revenues</TableHead>
            <TableHead className="hidden md:block pt-[15px]">
              Conversion
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.source}
              className="text-xs text-[#2B3674] text-center"
            >
              <TableCell className="flex items-center ">
                <FontAwesomeIcon
                  icon={["fab", item.icon]}
                  className={`h-6 w-6 mr-2 ${getIconStyle(item.icon)}`}
                />
                {item.source}
              </TableCell>
              <TableCell className="font-bold">{item.visitors}</TableCell>
              <TableCell className="text-[#05CD99] font-bold">
                {item.revenues}
              </TableCell>
              <TableCell className="hidden md:block pb-[15px] text-[#4318FF] font-bold text-center">
                {item.conversion}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
