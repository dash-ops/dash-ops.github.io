import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  actionText: string
  onAction: () => void
  variant?: "default" | "primary"
}

export function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  actionText, 
  onAction, 
  variant = "default" 
}: FeatureCardProps) {
  return (
    <Card className="group hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${
            variant === "primary" 
              ? "bg-primary text-primary-foreground" 
              : "bg-muted"
          }`}>
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription className="text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={onAction}
          variant={variant === "primary" ? "default" : "outline"}
          className="w-full"
        >
          {actionText}
        </Button>
      </CardContent>
    </Card>
  )
}
